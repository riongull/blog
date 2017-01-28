import React, { Component } from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Select, Input, Checkbox, TextArea } from './FormElements'
import { loadFromGitHub, saveToGitHub, publish } from './gitHubHelpers'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorageHelpers'
import 'bootstrap/dist/css/bootstrap.css'

let GitHubForm = (props) => {
  const { passContent, handleSubmit, action, username, token, repo, path, file, overwrite } = props
  console.log('action:', action)
  
  var submitFn = () => {}
  var submitText = ''
  var message = ['action', 'file', 'from', 'to'] 

  switch (action) {
    case 'load-ls':
      submitFn = loadFromLocalStorage;
      submitText = 'Load from Local Storage';
      message = ['load', 'the contents', 'local storage', 'the editor above']
      break;
    case 'load-gh':
      submitFn = loadFromGitHub;
      submitText = 'Load from GitHub';
      message = [`load','the file from github.com/${username}/${repo}/${path}/${file}`, 'GitHub', 'the editor above']
      break;
    case 'save-ls':
      submitFn = saveToLocalStorage;
      submitText = 'Save to Local Storage';
      message = ['save','the contents', 'the editor above', 'your broswer\'s local storage']
      break;
    case 'save-gh':
      submitFn = saveToGitHub;
      submitText = 'Save to GitHub';
      message = ['save','the contents', 'the editor above', `github.com/${username}/${repo}/${path}/${file}`]
      break;
    case 'publish':
      submitFn = publish;
      submitText = 'Publish';
      message = ['initiate a request to publish','the contents', 'the editor above', `github.com/${username}/${repo}/${path}/${file}`]
      break;
    default:
      console.log('no valid action in switch');
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFn)}>
        <Field component={Select} name="action"/>
        {(action=='load-gh'||action=='save-gh')&&<Field component={Input} type="text" labelText="User" name="username" placeholder="Your GitHub username (e.g. riongull)"/>}
        {(action=='load-gh'||action=='save-gh'||action=='publish')&&<Field component={Input} type="text" labelText="Token" name="token" placeholder="Your GitHub personal access token"/>}
        {(action=='load-gh'||action=='save-gh')&&<Field component={Input} type="text" labelText="Repo" name="repo" placeholder="GitHub repository to store data (e.g. blog)"/>}
        {(action=='load-gh'||action=='save-gh')&&<Field component={Input} type="text" labelText="Path" name="path" placeholder="Path under repo to store draft (e.g. todo)"/>}
        {(action=='publish')&&<Field component={Input} type="text" labelText="Author" name="author" placeholder="Article author (e.g. Satoshi Nakamoto)"/>}
        {(action=='publish')&&<Field component={Input} type="text" labelText="Title" name="title" placeholder="Article title (e.g. Why I love Dash)"/>}
        {/*(action=='publish')&&<Field component={Input} type="text" labelText="Categories" name="categories" placeholder="Categories (e.g. merchants, economics)"/>*/}
        {(action=='publish')&&<Field component={TextArea} labelText="Sample" name="sample" placeholder="Text sample from your article (e.g. First bit of your article)"/>}
        {(action!='choose'&&action!='publish')&&<Field component={Input} type="text" labelText="File" name="file" placeholder="Name to give to draft contents (e.g. rev2)"/>}
        {(action=='save-gh'||action=='save-ls'||action=='publish')&&<Field component={Checkbox} type="checkbox" descText="Overwrite file on GitHub" name="overwrite" id="overwrite"/>}
        {<p>Clicking below will {message[0]} {message[1]} from {message[2]} to {message[3]}</p>}
        {action!='choose'&&<button type="submit" className="btn btn-primary">{submitText}</button>}
      </form>
    </div>
  );
}

GitHubForm = reduxForm({
  form: 'gitHubForm',
  // onSubmit: submitFn
})(GitHubForm);

export default GitHubForm = connect((state) => {
  // const { initialValues } = state
  const { action, username, token, repo, path, file, overwrite } = formValueSelector('gitHubForm')(state, 'action', 'username', 'token', 'repo', 'path', 'file', 'overwrite')
  return { action, username, token, repo, path, file, overwrite } // add initialValues when initialValues reducer has been set up
})(GitHubForm);
import React, {useState} from 'react'
import './App.css';
import MultiSelect from './components/MultiSelect/MultiSelect';
import Tags from './components/Tags/Tags';


function App() {
  const options = [
    {
      key:'jenny',
      value:'Jenny Hess',
      isChecked: true
    },
    {
      key:'elliot',
      value:'Elliot Fu',
      isChecked: true
    },
    {
      key:'stevie',
      value:'Stevie Feliciano',
      isChecked: false
    },
    {
      key:'christian',
      value:'Christian',
      isChecked: false
    },
    {
      key:'aida',
      value:'Aida Bugg',
      isChecked: false
    },
    {
      key:'peg',
      value:'Peg Legge',
      isChecked: false
    }
  ]
  const [state, setState] = useState({
    users:options,
    tags:options.filter(option => option.isChecked)
  });

  const {tags, users} = state;
  
  const listClickHandler = (selObj) => {
    const selectedIndex = tags.find(tag => {
      return tag.key === selObj.key
    });
    if(selectedIndex) {
      removeTag(selectedIndex.key);
      return;
    }
    setState({
      users:state.users.map((user) => {
        user.isChecked = user.key === selObj.key ? true :user.isChecked
        return user;
      }),
      tags:[...state.tags, selObj]
    })
  }

  const removeTag = (tagId) => {
    setState({
      tags:state.tags.filter((tag) => tagId !== tag.key),
      users:state.users.map((user) => {
        user.isChecked = user.key === tagId ? false :user.isChecked
        return user;
      })
    })
  }
  return (
    <div className="App">
      <div className="row">
        <div className="col-1-of-2">
          <MultiSelect options={users} onListClick={listClickHandler} />
        </div>
        <div className="col-2-of-2">
        <Tags tags={tags} removeTag={removeTag} />
        </div>
      </div>
        
        
    </div>
  );
}

export default App;

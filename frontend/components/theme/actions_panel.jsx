import React from 'react';
import { Link } from 'react-router';


const ActionsPanel = ( theme, updateUser, router) => {

  //
  const saveTheme = () => {
    const user = window.currentUser;
    // const themeSaves = user.theme_saves;
    if (!user.saved_themes.includes(theme)){
      user.saved_themes.push(theme);
      updateUser(user);
    }
  };

  const verifyUser = () => {
    if (window.currentUser) {
      return (<Link to="/mythemes" onClick={saveTheme}>
      <img className="action-icon" src={window.save}></img>
      <h4>Save to Library</h4>
    </Link>);
    } else {
      return ( <Link to="/login">
      <img className="action-icon" src={window.save}></img>
      <h4>Save to Library</h4>
    </Link>);
    }
  }

  return (

    <section className="actions-panel group">
      <h3>Actions</h3>
      <ul>
        <li className="action-item">
            { verifyUser() }

        </li>

        <li className="action-item">
          <Link to={`/create/${theme.id}`}>
            <img className="action-icon" src={window.edit}></img>
            <h4>Edit Copy</h4>
          </Link>
        </li>
      </ul>
      <h3>Info</h3>
      <ul>
        <li className="info-item"><h4 className="info-type">Created By:</h4><h4 className="info-content">{theme.user.name}</h4></li>
        <li className="info-item"><h4 className="info-type">Created At:</h4><h4 className="info-content">{theme.created_at.slice(0,10)}</h4></li>
      </ul>
    </section>
  );
};

export default ActionsPanel;

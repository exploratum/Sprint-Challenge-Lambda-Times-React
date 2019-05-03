import React from 'react';

import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  let classVar = props.selectedTab === props.tab ? 'tab active-tab' : 'tab';

  const handleTabClick = (event => {
    event.preventDefault()
    props.selectTabHandler(props.tab)
  })


  return (
    <div
      className={classVar}
      onClick={handleTabClick}
    /* Replace this dummy click handler function with your selectTabHandler function from props 
     you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </div>
  );



};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;

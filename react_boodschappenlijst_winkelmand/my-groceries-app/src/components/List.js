import React, { Component } from "react"
import ListItem from "./ListItem"
class List extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props)
    return (
      <div>
    <ul>
        {
          this.props.groceryList.value.map((grocery) => {
            return <ListItem value={this.props.groceryList.title} handleClick={this.props.handleClick}/> 
          })
        }
    </ul>
    <ul>
        {
          this.props.shoppingList.value.map((shopListItem) => {
            return <ListItem value={this.props.shoppingList.title} handleClick={this.props.handleClick}/> 
          })
        }
    </ul>
    </div> 
    )
  }
}
//   render() {
//     console.log(this.props)
//     const 
//     //console.log(this.props.value.value[0])
//     return <ul>
//       <ListItem value={this.props} handleClick={this.props.handleClick}/>
//       </ul>;
//   }
// }

export default List;


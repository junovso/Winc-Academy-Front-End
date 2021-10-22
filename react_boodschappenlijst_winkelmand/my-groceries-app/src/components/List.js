import React, { Component } from "react"
import ListItem from "./ListItem"
class List extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    const { itemList, handleClick} = this.props;
    return (
      <div>
    <ul>
        Map over itemList & return Array vol met ListItem componenten. 
        {
          itemList.map(item => <ListItem key={item.id} item={item} handleClick={handleClick}/>)
        }
    </ul>
    {/* <ul>
        {
          this.props.shopItemList.map((shopItem) => {
            return <ListItem value={shopItem.title} handleClick={this.props.handleClick}/> 
          })
        }
    </ul> */}
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


function List({itemList}) {
    return (
    <div class="List">
        {itemList.map((item, index) => (
            <ListItem index={index} name={item.name} email={item.email}></ListItem>
        ))}    
    </div>
    );
}
export default List;

function ListItem({index, name, email}) {
    return (
        <div class="list-item">
            <div class="item-number">{index+1}</div>
            <div class="item">{name}</div>
            <div class="item-email">{email}</div>
          <button class="delete-button">DELETE</button>
        </div>
    );
}

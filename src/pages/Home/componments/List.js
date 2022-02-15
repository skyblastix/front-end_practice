import Item from "./Item"

const List = ( {listData} ) =>{
    console.log('listData', listData);
    return <div className="list">
        {
            listData.map((item) => {
                const { note, date, time } = item
                return <Item note ={note} />
            })
        }
    </div>
}

export default List

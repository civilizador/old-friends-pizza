


export default class menuArea extends React.Component(){
  props.items.items.map(items => {
        return <li key={`movie-${items.id}`}>{items.name}</li>
    )}
}

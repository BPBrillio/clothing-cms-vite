import CategoryItem from "../category-item/category-item.component"
import "./directory.styles.scss";
const Directory = ({ categories }) => {
    return (<div className="directory-container">
     {categories.map(c => <CategoryItem category={c} key={c.id}/>)}
     </div>)
}

export default Directory;
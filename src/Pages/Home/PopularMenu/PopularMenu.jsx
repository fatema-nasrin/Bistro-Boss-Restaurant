
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
 
    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Menu"
            subheading="Popular Items"
            />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item = {item}/>)
                }
            </div>
            <button className="mt-6 btn btn-outline border-0 border-b-4 text-white">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;
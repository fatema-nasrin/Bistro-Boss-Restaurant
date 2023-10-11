import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subheading="Check it out" heading="Featured Item"/>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">what can i get </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem officia enim quaerat vero culpa ipsum atque deleniti libero fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam natus similique alias accusamus, eius minus tenetur quas saepe assumenda! </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
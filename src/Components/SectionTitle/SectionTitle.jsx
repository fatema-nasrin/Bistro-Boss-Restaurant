
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="mx-auto text-center my-8 md:w-3/12">
            <p className="text-yellow-700 mb-2">---{subheading}---</p>
            <h3 className="text-3xl text-gray-400 border-y-4 border-cyan-600 py-4 mb-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
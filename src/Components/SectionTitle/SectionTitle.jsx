

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-96 my-4">
            <p className="text-yellow-600 mb-4">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
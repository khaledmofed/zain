import Counter from '../counter/Counter';

const SingleFunFact1 = ({ fact }) => {
    const { end, operator, title } = fact

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer"><Counter end={end} /></div>
                    <div className="operator">{operator}</div>
                </div>
                <span className="medium">{title}</span>
            </div>
        </>
    );
};

export default SingleFunFact1;
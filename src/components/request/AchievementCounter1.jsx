import Counter from "../counter/Counter";

const AchievementCounter1 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-handshake"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><Counter end={100} /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Projects delivered across public and private sectors</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-employee"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><Counter end={50} /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Clients served with integrated solutions</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;
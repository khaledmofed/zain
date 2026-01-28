"use client";
import { useTranslations } from 'next-intl';
import Counter from "../counter/Counter";

const AchievementCounter1 = () => {
    const t = useTranslations('achievement');
    
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
                            <span className="medium">{t('projectsDelivered')}</span>
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
                            <span className="medium">{t('clientsServed')}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;
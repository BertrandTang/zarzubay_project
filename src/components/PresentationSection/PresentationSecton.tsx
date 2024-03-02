import './PresentationSection.scss';
import Carousel from '../Carousel/Carousel';
import CarouselData from '../../assets/data/CarouselData';


function Presentation() {
    return (
        <><>
        <section className="presentation">
                <article className="presentation__container">
                    <h1 className="presentation__title"><span>Love</span> in Zarzubay</h1>
                    <p className="presentation__text">Love in Zarzubay is an episodic Otome Game set in the beautiful coastal town of Zarzubay, overlooking an ocean of wonders to explore. <br />
                        You play as an individual who, after a painful breakup, decides overnight to leave everything behind and move to Zarzubay a city you had only heard about in a brochure from your "Be Happy" magazine! <br />
                        Here you are at the beginning of the brand new chapter of your life, hoping it will be the best in the book of your life!
                    </p>
                </article>
        </section>
        </><Carousel slides={CarouselData} /></>
    )
}


export default Presentation;
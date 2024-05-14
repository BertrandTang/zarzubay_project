import AppHeader from '../AppHeader/AppHeader';
import Characters from '../Characters/Characters';
import PresentationSection from '../PresentationSection/PresentationSecton';
import './Home.scss';

export function Home () {
    return (
        <>
            <AppHeader />
            <PresentationSection />
            <Characters />
        </>
        
    )
}
 
export default Home;
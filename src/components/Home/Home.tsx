import AppHeader from '../AppHeader/AppHeader';
import Characters from '../Characters/Characters';
import Presentation from '../PresentationSection/PresentationSecton';
import './Home.scss';

export function Home () {
    return (
        <>
            <AppHeader />
            <Presentation />
            <Characters />
        </>
        
    )
}
 
export default Home;
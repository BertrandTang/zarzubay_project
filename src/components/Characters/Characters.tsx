import './Characters.scss';

function Characters(){
    return (
        <section className='characters'>
            <article className='characters__descriptions'>
                <h2 className='characters__title'>Aurora</h2>
                <section className='characters__info'> 
                <p className='characters__text'>Aurora Giulietta De Angelo, 28 ans, est une vétérinaire italienne spécialisée en NAC. D’un tempérament introvertie et plutôt timide de prime abord, elle mène une vie discrète, préférant la solitude avec ses animaux à la société. Non dépourvu de charme, cette jeune femme au paraître chirurgicale mêle professionnalisme et bienveillance à travers sa voix douce, son odeur enivrante rappelant celle des pommes d’amour, et ses capacités médicales reconnues dans son milieu. Derrière cette image de femme forte, se cache néanmoins une histoire marquée par des trahisons passées et des blessures encore fraîches qu’elle continue encore aujourd’hui, de panser.<br/>
                Elle voue une passion profonde pour les animaux et rêve d'ouvrir un refuge pour eux à Zarzubay. Ses animaux de compagnie, dont Castiel le caméléon espiègle, sont ses plus fidèles compagnons et ses meilleurs amis, en effet, un animal ne trahira jamais un maître qui le chéri.<br/>
                Aurora est une femme complexe qui cache ses secrets derrière un sourire charmeur. Elle cherche l'amour authentique tout en craignant d'être trahie une fois de trop. Une femme à la recherche de l'amour, mais avec un passé mystérieux qui intrigue et fascine ceux qui gravitent autour d’elle, mais d’autant plus ceux qui ne la connaissent pas.

</p>

                <article className='characters__pictures'>
                    <img className='characters__pictures--img' src='public/img/aurora01.png'/>
                
                
                </article>
                </section>
         </article>
            <article className='characters__button'>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/aurora_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/charlie_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/esteban_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/ethan_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/gaby_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/karim_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/leila_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/mirabella_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/nana_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/noah_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/sasha_icon.png'/></button>
                <button className='characters__button--icon'><img className='characters__button--icon--img' src='public/img/theo_icon.png'/></button> 
            </article>
        </section>
    )

}

export default Characters;
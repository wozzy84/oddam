import React from 'react'
import Pagination from './Pagination'
import Posts from './Posts'
import {useState, useEffect} from 'react'
import postData from '../../assets/data/postData'

const HomeHelp = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [activeButton, setActiveButton] = useState("foundations");
    const style = {
       border: "0.75px solid #3C3C3C"
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    } 

    useEffect(() => {
        const result = postData.filter(e => e.pageMarkName == activeButton)
        console.log(result)
          setPosts(result);    
      }, [activeButton]);


    const handleClick = (e) => {
        setActiveButton(e.currentTarget.id)
        setCurrentPage(1)
    }

    return (
        <section className="home-help" id="Help">
            <div className="home-help__container">
                <p className="home-help__title">Komu pomagamy?</p>
                <div className="home-help-min">
                    <div className="home-help-min__field">
                        <div className="home-help-min__circle">FUNDACJOM</div>
                        <p className="home-help-min__description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</p>
                    </div>
                    <div className="home-help-min__field">
                        <div className="home-help-min__circle">ORGANIZACJOM POZARZĄDOWYM</div>
                        <p className="home-help-min__description">Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.</p>
                    </div>
                    <div className="home-help-min__field">
                        <div className="home-help-min__circle">LOKALNYM ZBIÓRKOM</div>
                        <p className="home-help-min__description">Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.</p>
                    </div>
                </div>
                <div className="home-help__decoration"></div>
                <div className="home-help__nav">
                    <ul className="home-help-list" >
                        <li className="home-help-list__element" id="foundations"  style={activeButton==="foundations"? style: null}onClick={handleClick}>Fundacjom</li>
                        <li className="home-help-list__element" id="organizations" style={activeButton==="organizations"? style: null}onClick={handleClick}>Organizacjom pozarządowym</li>
                        <li className="home-help-list__element" id="local" style={activeButton==="local"? style: null} onClick={handleClick}>Lokalnym zbiórkom</li>
                    </ul>
                </div>
                <p className="home-help__description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="home-help__content">
                <Posts posts={currentPosts}  />
                <Pagination
                 postsPerPage={postsPerPage}
                 totalPosts={posts.length}
                 paginate={paginate}
                 pageMark={activeButton}
                />
            </div>
        </section>
    )
}


export {HomeHelp}
import React from 'react'
import Pagination from './Pagination'
import Posts from './Posts'
import {useState, useEffect} from 'react'
import postData from '../../assets/data/postData'





const HomeHelp = (props) => {
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
        

        setActiveButton(e.currentTarget.className)
        setCurrentPage(1)
    }
    return (
        <section className="HomeHelpSec">
            <div className="HomeHelpNavCont">
                <p className="HomeHelpTitle">Komu pomagamy?</p>
                <div className="HomeDecoration"></div>
                <div className="HomeHelpNav">
                    <ul className="HelpNavList" >
                        <li className="foundations" style={activeButton==="foundations"? style: null}onClick={handleClick}>Fundacjom</li>
                        <li className="organizations" style={activeButton==="organizations"? style: null}onClick={handleClick}>Organizacjom pozarządowym</li>
                        <li className="local" style={activeButton==="local"? style: null} onClick={handleClick}>Lokalnym zbiórkom</li>
                    </ul>
                </div>
                <p className="HomeHelpNavDesc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>

            <div className="HomeHelpContent">
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
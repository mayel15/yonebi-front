import { useParams } from 'react-router-dom';
import Resource from '../Resource/Resource';
import { React, useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './CategoryPage.css'
import GestionButtons from '../GestionButtons/GestionButtons';


export default function CategoryPage(props) {
  const { subject, category } = useParams();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const getResources = async () => {
      try {
        const response = await fetch("https://yonebi-back.vercel.app/api/resources/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        console.log(data);
        setResources(data);
      } catch (error) {
        console.error(error);
      }
    };

    getResources();
  }, []);

  return (
    <div>
      <div className="row content-section">
        {/*<h1>{subject}</h1>
      <h2>{category}</h2>*/}
        {
          (props.view === 'admin')
            ? <Sidebar view='admin' />
            : <Sidebar />
        }

        <div className='col-lg-9'>
          <div className='row'>
            <h3 className='nav-result col-lg-12 text-center'>{subject + ' > ' + category}</h3>
            {
              (props.view === 'admin')
              ? (
                <div>
                  <h3 className='text-center' >Admin de yonebi.</h3> 
                  <GestionButtons />
                </div>
              )
              : null
            }
            {(props.view === 'admin')
              ? (resources.filter((r) => (r.subject === subject && r.category === category))
                .map((r, index) => (
                  <Resource
                    title={r.title}
                    key={r.id}
                    url={r.url}
                    authors={r.authors}
                    addedAt={r.addedAt.toString()}
                    description={r.description}
                    subject={r.subject}
                    category={r.category}
                    id={r._id}
                    view='admin'
                  />)))
              : (resources.filter((r) => (r.subject === subject && r.category === category))
                .map((r, index) => (
                  <Resource
                    title={r.title}
                    key={r.id}
                    url={r.url}
                    authors={r.authors}
                    addedAt={r.addedAt.toString()}
                    description={r.description}
                    subject={r.subject}
                    category={r.category}
                    id={r._id}
                  />)))

            }
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
  )
}

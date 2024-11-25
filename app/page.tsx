import Image from "next/image";

export default function Home() {
  return (
  <>
    <div className="hero_section">
    <div className="container">

    <div className="main">
      <div className="text_herosec">
          <h1 className="main_h1">Hi, I am John, Creative Technologist</h1>
          <p className="main_para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className="herosec_button">Download Resume</button>
      </div>

        
        <div>
          <Image src="/persone_image.png" width={300} height={300} alt="John's Image" />
        </div>  
    </div>

      
    </div>
    </div>


    <div className="recent_post">
      <div className="container">
        <div className="heading">
          <h3 className="main_had">Recent Post</h3>
          <button className="view_all_btn">View all</button>
        </div>
        
        <div className="card_parent">
          <div className="card">
            <h2 className="card_heading">Making a design system from scratch</h2>
            <p className="date_text">12 Feb 2020 | Design, Pettern</p>
            <p className="paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
          </div>

          <div className="card">
            <h2 className="card_heading">Making a design system from scratch</h2>
            <p className="date_text">12 Feb 2020 | Design, Pettern</p>
            <p className="paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
          </div>
        </div>

         
          
        </div>
    </div>

  

    <div className="featured_section">
      <div className="container">
      <div className="featured_main_dev">
        <div className="main_head">
         <h1>Featured works</h1>
        </div>


      <div className="featured_card">   
        <div>
        <Image src="/image_comp.png" width={370} height={340} alt="John's Image" />
        </div>

        <div className="featured_text">
          <h2 className="feature_heading">Designing Dashboards</h2>
          <div className="badg_parent">
            <div className="badg">
              <p>2020</p> 
            </div>
            <p className="badg_haed">Dashboard</p>     
          </div>
          <p className="featured_para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      </div>
    </div>
  </div>
           

  <div className="featured_section">
      <div className="container">
      <div className="featured_main_dev">
       
      <div className="featured_card">   
        <div>
        <Image src="/painting_image.png" width={370} height={340} alt="John's Image" />
        </div>

        <div className="featured_text">
          <h2 className="feature_heading">Designing Dashboards</h2>
          <div className="badg_parent">
            <div className="badg">
              <p>2020</p> 
            </div>
            <p className="badg_haed">Dashboard</p>     
          </div>
          <p className="featured_para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      </div>
    </div>
  </div>   

  <div className="featured_section">
      <div className="container">
      <div className="featured_main_dev">
       
      <div className="featured_card">   
        <div>
        <Image src="/logo_image.png" width={370} height={340} alt="John's Image" />
        </div>

        <div className="featured_text">
          <h2 className="feature_heading">Designing Dashboards</h2>
          <div className="badg_parent">
            <div className="badg">
              <p>2020</p> 
            </div>
            <p className="badg_haed">Dashboard</p>     
          </div>
          <p className="featured_para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      </div>
    </div>
  </div>   
        
  </>
  );
}


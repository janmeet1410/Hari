import * as React from 'react';
import styles from './Banner.module.scss';
import { IBannerProps } from './IBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react';

require('../assets/style.css');

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <div id='Home'>
        <section className="hero">
                <img className='herologo' style={{width:'270px', height:'auto'}} src={require('../assets/jnj.png')} />

         <div className='infoflex'>
           <div style={{display:'none'}} className="tagline">✨ Procurement AI Lab</div>
          <h1>PAL - Procurement <span> AI Lab</span></h1>
          <p>
           Procurement Digital Process & Solutions (DPS) - Global Services Procurement
          </p>
          <p>
            Say Hello to PAL - Your AI Partner for Procurement Excellence
          </p>
         </div>

                <img className='herologo' src={require('../assets/PAL.jpg')} />

          {/* <div className="buttons">
      <a href="#" className="btn btn-primary">Discover Our Work →</a>
      <a href="#" className="btn btn-secondary">▶ Watch Demo</a>
    </div> */}
          <div className="scroll-indicator"></div>
        </section>

        <div className='Pagecontainer'> 
            
</div>

<div style={{display:'flex'}}>
         <section style={{width:'50%'}} id='mission' className="mission-section">
          <h2>Our Mission</h2>
          <p className="subtitle">
           To accelerate value creation for Procurement by pioneering data-driven innovation, simplifying processes, and empowering partners through actionable insights from Data Science, Advanced Analytics, and Generative AI.  </p>

          <div className="mission-cards">
            <div className="mission-card">
              <i className="fas fa-bullseye"></i>
              <h3>C: COMPETE</h3>
              <p>
                 We empower Procurement professionals and business partners to perform at their best—through world-class AI(Artificial Intelligence) solutions and actionable insights that enable faster, smarter decision-making. </p>
            </div>
            <div className="mission-card">
              <i className="fas fa-heart"></i>
              <h3>E: EXECUTE</h3>
              <p>
                We prioritize what matters - accelerating delivery on initiatives such as Project Preferred for MedTech and R&D Procurement projects in Innovative Medicine, ensuring speed and value. 
              </p>
            </div>
            <div className="mission-card">
              <i className="fas fa-lightbulb"></i>
              <h3>O: OPTIMIZE</h3>
              <p>
                Every Challenge is an opportunity. We’re continuously learning from the challenges, and we’re building scalable solutions like Smart Source AI, designed to grow smarter with time and continuously deliver value. 
              </p>
            </div>
          </div>

          {/* <p className="mission-quote">
            "We believe technology should serve humanity, not the other way around.
            Our mission is to create solutions that enhance lives and empower businesses
            to achieve their full potential."
          </p> */}

          <div className="circle small"></div>
          <div className="circle large"></div>
        </section>
  <div className='Quicklinks'  style={{marginTop:'70px', width:'50%'}}>
          {/* <h2 className='webheaders'>Quick Links</h2> */}

          <div className='Quicklinkswrapper'>
 <a href="#products">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/product.png')} />
                <p>AI Products</p>
              </div>
            </a>
             <a href="#Usecases">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/analysis.png')} />
                <p>AI Insights</p>
              </div>
            </a>
            <a href="#team">
              <div className='Quicklinkcard'>
                <img src={require('../assets/team.png')} />
                <p>News Letters</p>
              </div>
            </a>
            <a href="#team">
              <div className='Quicklinkcard'>
                <img src={require('../assets/team.png')} />
                <p>Submit Demands</p>
              </div>
            </a>
            <a href="#capabilities">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/capability.png')} />
                <p>Our Capabilities</p>
              </div>
            </a>
            <a href="#tech">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/digital.png')} />
                <p>Tech Radar</p>
              </div>
            </a>
           
           
              {/* <a href="">
              <div className='Quicklinkcard'>
                <img src={require('../assets/quicklinks/reputation.png')} />
                <p>Voice of customer</p>
              </div>
            </a> */}
          </div>
        </div>
</div>



        <div className='Pagecontainer'> 

           

       


          {/* <section className="solutions-section">
            <div className="solutions-container">
              <div className="solutions-text">
                <h2>Our Mantra to Success​</h2>
                <p>
                  "To accelerate value creation for Procurement by pioneering data-driven innovation, simplifying processes, and empowering partners through actionable insights from Data Science, Advanced Analytics, and Generative AI.”​
                </p>
              </div>

              <div className="solutions-stats">
               
                <img src={require('../assets/missionimg.png')} />
              </div>
            </div>
          </section> */}


        </div>
            <h2 style={{fontSize: "36px", margin: "0 0 15px", fontWeight: "700"}} >Our Portfolio</h2>

      <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
          <img  style={{width:'95%'}} src={require('../assets/image1.png')} />
        </div>
        <div style={{width:'50%'}}>
          <img style={{width:'90%'}} src={require('../assets/mindimg.png')}  />
          </div>
      </div>

        <div className='Pagecontainer'>
          {/* <section id='capabilities' className="capabilities-section">
            <div className="badge"><i className="fas fa-cogs"></i> What We Do</div>
            <h2>Our Capabilities</h2>
            <p className="subtitle">
              Comprehensive expertise across the full spectrum of modern technology solutions that drive
              innovation and deliver exceptional results.
            </p>

            <div className="capabilities-grid">

              <div className="capability-card">
                <div className="icon"> <img src={require('../assets/team.png')} /> </div>
                <h3>BUSINESS PROCESS MAPPING​</h3>
                <p>Comprehensive data management, analytics, and business intelligence solutions.</p>
                <ul>
                  <li>Database Design</li>
                  <li>Data Analytics</li>
                  <li>ETL Processes</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>DATA SCIENCE AND FEATURE ENGG ​</h3>
                <p>Scalable, secure cloud solutions and DevOps practices for modern applications.</p>
                <ul>
                  <li>AWS & Azure</li>
                  <li>CI/CD Pipelines</li>
                  <li>Containerization</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>INSIGHT BUILDING​ ​</h3>
                <p>Advanced security measures to protect your applications and data from threats.</p>
                <ul>
                  <li>Security Audits</li>
                  <li>Penetration Testing</li>
                  <li>Compliance</li>
                </ul>
              </div>

              <div className="capability-card">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>SOLUTIONING STRATEGIES​</h3>
                <p>Transform your data into actionable insights with advanced analytics and reporting.</p>
                <ul>
                  <li>Dashboard Creation</li>
                  <li>Data Visualization</li>
                  <li>Predictive Analytics</li>
                </ul>
              </div>

            </div>
          </section> */}


          {/* <section id='tech' className="tech-section">
            <div className="badge">⚡ Our AI Tech Stack</div>
            <h2>Tech Radar</h2>
            <p className="subtitle">
              Our technology stack and tools that power innovation and drive exceptional results across every project we deliver.
            </p>

            <div className="tech-grid">

              <div className="tech-card">
                <h3>DATA WORKFLOW MANAGEMENT​</h3>
                <div className="tags">
                  <span className="tag">Data Transformation and Pipelining, ​</span>
                  <span className="tag">Data Modeling</span>
                  <span className="tag">CDL Configuration</span>
                </div>
              </div>

              <div className="tech-card">
                <h3>AI & PREDICTIVE ANALYTICS ​</h3>
                <div className="tags">
                  <span className="tag">Machine Learning​</span>
                  <span className="tag">Hypothesis Testing</span>
                  <span className="tag">Optimization & Clustering Algorithms</span>
                </div>
              </div>


              <div className="tech-card">
                <h3>COGNITIVE INTELLIGENCE​</h3>
                <div className="tags">
                  <span className="tag">Reasoning ​</span>
                  <span className="tag">Agentic AI</span>
                  <span className="tag">Knowledge Graphs</span>
                  <span className="tag">Deep Learning</span>
                </div>
              </div>
            </div>
          </section> */}


          <section id='products' className="products-section">
            <div className="badge">⚙️ Our Solutions</div>
            <h2>AI Products - By PAL </h2>
            <p className="subtitle">
              Innovative software solutions designed to solve complex business challenges and accelerate digital transformation for companies worldwide.
            </p>

            <div className="product-grid">
              <div className="product-card">
                <div className="icon">⚡</div>
                <span className="status popular">Popular</span>
                <h3>DataFlow Pro</h3>
                <div className="category">Data Analytics</div>
                <p>Advanced data pipeline management and analytics platform for enterprise-scale data processing.</p>
                <div className="features">
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Real-time Processing</li>
                    <li>Auto-scaling</li>
                    <li>Custom Dashboards</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Learn More →</button>
                  <button className="btn btn-outline">View Demo</button>
                </div>
              </div>

              <div className="product-card">
                <div className="icon">🛡️</div>
                <span className="status new">New</span>
                <h3>SecureVault</h3>
                <div className="category">Security</div>
                <p>Comprehensive cybersecurity solution with threat detection, prevention, and incident response.</p>
                <div className="features">
                  <strong>Key Features:</strong>
                  <ul>
                    <li>24/7 Monitoring</li>
                    <li>AI Threat Detection</li>
                    <li>Compliance Ready</li>
                    <li>Multi-factor Auth</li>
                  </ul>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Learn More →</button>
                  <button className="btn btn-outline">View Demo</button>
                </div>
              </div>

              <div className="product-card">
                <div className="icon">🌐</div>
                <span className="status enterprise">Enterprise</span>
                <h3>CloudConnect</h3>
                <div className="category">Cloud Solutions</div>
                <p>Seamless cloud migration and management platform with automated deployment pipelines.</p>
                <div className="features">
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Multi-cloud Support</li>
                    <li>Cost Optimization</li>
                    <li>Automated Scaling</li>
                    <li>Zero Downtime</li>
                  </ul>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Learn More →</button>
                  <button className="btn btn-outline">View Demo</button>
                </div>
              </div>
            </div>

            <a className='abutton' href="https://jnj.sharepoint.com/teams/ProcurementDigitalSolutions/SitePages/Products.aspx">View All Products</a>
          </section>

          <section id='Usecases' className="success-section">
            <div className="badge">📌 Insights</div>
            <h2>Insights from AI - Use cases</h2>
            <p className="subtitle">
              Real-world use cases showcasing how our solutions drive measurable business impact across diverse industries and transform organizations worldwide.
            </p>

            <div className="case-grid">
              <div className="case-card">
                <div className="case-header blue">
                  <div className="category">Enterprise</div>
                  <h3>🏢 Digital Transformation at Scale</h3>
                </div>
                <div className="case-body">
                  <p>Helped a Fortune 500 company modernize their legacy systems, resulting in 40% operational efficiency improvement and $2M annual savings.</p>
                  <ul>
                    <li>40% Efficiency Boost</li>
                    <li>98% Uptime</li>
                    <li>$2M Saved</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header green">
                  <div className="category">Healthcare</div>
                  <h3>💊 Patient Data Management System</h3>
                </div>
                <div className="case-body">
                  <p>Developed a HIPAA-compliant platform that streamlined patient records management for a network of 50+ clinics.</p>
                  <ul>
                    <li>50+ Clinics</li>
                    <li>HIPAA Compliant</li>
                    <li>60% Faster Processing</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header purple">
                  <div className="category">E-commerce</div>
                  <h3>🛒 AI-Powered Recommendation Engine</h3>
                </div>
                <div className="case-body">
                  <p>Built a machine learning platform that increased conversion rates by 35% and customer engagement by 50%.</p>
                  <ul>
                    <li>35% Higher Conversion</li>
                    <li>50% More Engagement</li>
                    <li>24/7 AI Support</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>
            </div>
          </section>

        </div>

           <section id='team' className="about-section">
            <div className="badge"><i className="fas fa-users"></i> Meet Our Team</div>
            <h2>About Our Team</h2>
            <p>
              We are a passionate team of innovators, designers, and engineers committed to pushing the
              boundaries of what's possible in technology and design.
            </p>

            {/* <div className="stats-container">
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>200+</h3>
                <p>Global Clients</p>
              </div>
              <div className="stat-box">
                <div className="icon"><img src={require('../assets/team.png')} /></div>
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
            </div> */}
          </section>

      </div>
    );
  }
}

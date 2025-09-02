import * as React from 'react';
import styles from './Banner.module.scss';
import { IBannerProps } from './IBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react';
import * as moment from 'moment';
import { sp } from '@pnp/sp/presets/all';

require('../assets/style.css');

const backgroundColors = ["#e63946", "#2ecc71", "#9b59b6"];
export interface IBannerState {
  quickLinks:any;
  aiProducts:any;
  aiInsights:any;
}
export default class Banner extends React.Component<IBannerProps, IBannerState> {
  constructor(props: IBannerProps, state: IBannerState) {
    super(props);
    this.state = {
      quickLinks:[],
      aiProducts:[],
      aiInsights:[],
    };
  }
  public render(): React.ReactElement<IBannerProps> {

    return (
      <div id='Home'>
        <section className="hero">
          <img className='herologo' style={{width:'270px', height:'auto'}} src={require('../assets/jnj.png')} />

          <div className='infoflex'>
            <div style={{display:'none'}} className="tagline">✨ Procurement AI Lab</div>
            <h1>{this.props.welcomebannerTitle}</h1>
            <p>{this.props.welcomebannerDescription1}</p>
            <p>{this.props.welcomebannerDescription2}</p>
          </div>
          <img className='herologo' src={require('../assets/palwhite.png')} />
        </section>

      <div style={{display:'flex'}}>
              <section style={{width:'50%'}} id='mission' className="mission-section">
                <h2>{this.props.ourmissiontitle}</h2>
                <p className="subtitle">{this.props.ourmissiondescription}</p>
                <div className="mission-cards">
                  <div className="mission-card">
                    <i className="fas fa-bullseye"></i>
                    <h3>{this.props.missionlabel1}</h3>
                    <p>{this.props.missiondescription1}</p>
                  </div>
                  <div className="mission-card">
                    <i className="fas fa-heart"></i>
                    <h3>{this.props.missionlabel2}</h3>
                    <p>{this.props.missiondescription2}</p>
                  </div>
                  <div className="mission-card">
                    <i className="fas fa-lightbulb"></i>
                    <h3>{this.props.missionlabel3}</h3>
                    <p>{this.props.missiondescription3}</p>
                  </div>
                </div>
                <div className="circle small"></div>
                <div className="circle large"></div>
              </section>
              <div className='Quicklinks'  style={{marginTop:'70px', width:'50%'}}>
                <div className='Quicklinkswrapper'>
                  {
                    this.state.quickLinks.length > 0 && this.state.quickLinks.map((ele,ind) => {
                      let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Icon ? JSON.parse(ele.Icon).serverRelativeUrl : require(`../assets/quicklinks/product.png`);
                      return(
                        <a href={ele.Link ? ele.Link.Url : "#"}>
                          <div className='Quicklinkcard'>
                            <img src={imageURL} />
                            <p>{ele.Title}</p>
                          </div>
                        </a>
                      )
                    })
                  }
                  {/* <a href="#products">
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
                  </a> */}
                </div>
              </div>
      </div>

      <div className='Pagecontainer'> 
      </div>
        <h2 style={{fontSize: "36px", margin: "0 0 15px", fontWeight: "700", marginLeft:'20px'}} >Our Portfolio</h2>
      <div style={{display:'flex'}}>
        <div style={{width:'100%', textAlign:'center'}}>
          <img  style={{width:'95%'}} src={require('../assets/image1.png')} />
        </div>
      </div>

      <div className='Pagecontainer'>
        <section id='products' className="products-section">
          <div className="badge">⚙️ Our Solutions</div>
          <h2>{this.props.aiproducttitle}</h2>
          <p className="subtitle">{this.props.aiproductdescription}</p>
          <div className="product-grid">
            {
              this.state.aiProducts.length > 0 && this.state.aiProducts.map((ele,ind) => {
                const bgColor = backgroundColors[ind % backgroundColors.length];
                return(
                  <div className="product-card">
                    <div className="icon">⚡</div>
                    <span className="status popular" style={{background:bgColor}}>{ele.Category}</span>
                    <h3>{ele.Title}</h3>
                    <div className="category">{ele.Department}</div>
                    <p>{ele.Description}</p>
                    <div className="features">
                      <strong>Key Features:</strong>
                      <ul>
                        <p dangerouslySetInnerHTML={{ __html: ele.KeyFeatures}}></p>
                      </ul>
                    </div>
                    <div className="buttons">
                      <a href={ele.LearnMoreButtonLink}><button className="btn btn-primary">Learn More →</button></a>
                      <a href={ele.ViewDemoButtonLink}><button className="btn btn-outline">View Demo</button></a>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <a className='abutton' href="https://jnj.sharepoint.com/teams/ProcurementDigitalSolutions/SitePages/Products.aspx">View All Products</a>
        </section>

        <section id='Usecases' className="success-section">
          <div className="badge">📌 Insights</div>
          <h2>{this.props.aiinsighttitle}</h2>
          <p className="subtitle">{this.props.aiinsightdescription}</p>
          <div className="case-grid">
            {
              this.state.aiInsights.length > 0 && this.state.aiInsights.map((el,ind) => {
                return(
                  <div className="case-card">
                    <div className="case-header blue">
                      <div className="category">{el.Department}</div>
                      <h3>{el.Title}</h3>
                    </div>
                    <div className="case-body">
                      <p>{el.Description}</p>
                      <ul>
                        <p dangerouslySetInnerHTML={{ __html: el.KeyFeatures}}></p>
                      </ul>
                    </div>
                    <div className="case-footer">
                      <a href={el.CaseStudyLink}><button className="btn">Read Case Study →</button></a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>


        <section id='tech' className="tech-section">
          <div className="badge">⚡ Our AI Tech Stack</div>
          <h2>{this.props.aistacktitle}</h2>
          <p className="subtitle">{this.props.aistackdesription}</p>

          <div className="tech-grid">

            <div className="tech-card">
              <h3>Our AI Tech ​</h3>
              <div className="tags">
                <span className="tag">Data Transformation and Pipelining, ​</span>
                <span className="tag">Data Modeling</span>
                <span className="tag">CDL Configuration</span>
              </div>
            </div>

            <div className="tech-card">
              <h3>Our Capabilities​</h3>
              <div className="tags">
                <span className="tag">Machine Learning​</span>
                <span className="tag">Hypothesis Testing</span>
                <span className="tag">Optimization & Clustering Algorithms</span>
              </div>
            </div>


            <div className="tech-card">
              <h3>Placeholder​</h3>
              <div className="tags">
                <span className="tag">Reasoning ​</span>
                <span className="tag">Agentic AI</span>
                <span className="tag">Knowledge Graphs</span>
                <span className="tag">Deep Learning</span>
              </div>
            </div>
          </div>
        </section>

        <section id='team' className="about-section">
          <div className="badge"><i className="fas fa-users"></i> Meet Our Team</div>
          <h2>{this.props.ourteamtitle}</h2>
          <p>{this.props.ourteamdesription}</p>
        </section>

      </div>
    );
  }

  public componentDidMount = async () => {
    await this.getQuickLinks();
    await this.getAIProducts();
    await this.getAIInsights();
  }

  // get quick links details from Quick Links sharepoint list
  private getQuickLinks = async () => {
    try {
      const QuickLinkdDetails = await sp.web.lists.getByTitle("Quick Links").items.select("Title,ID,Icon,Link,LinkByOrder").expand('AttachmentFiles').orderBy('LinkByOrder', true).get();

      if (QuickLinkdDetails.length > 0) {
        this.setState({ quickLinks: QuickLinkdDetails });
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  // get ai products details from AI Products sharepoint list
  private getAIProducts = async () => {
    await sp.web.lists.getByTitle("AI Products").items.select("ID,Title,Description,KeyFeatures,Category,Department,LearnMoreButtonLink,ViewDemoButtonLink").top(4999).orderBy("Modified", false).top(3).get().then((data) => {
      let ProductArr = [];
      if (data.length > 0) {
        data.map((product) => {
          let ProductJson = {};
          ProductJson["ID"] = product.ID;
          ProductJson["Title"] = product.Title ? product.Title : '';
          ProductJson["Description"] = product.Description ? product.Description : '';
          ProductJson["KeyFeatures"] = product.KeyFeatures ? product.KeyFeatures :'';
          ProductJson["Category"] = product.Category ? product.Category : '';
          ProductJson["Department"] = product.Department ? product.Department : '';
          ProductJson["LearnMoreButtonLink"] = product.LearnMoreButtonLink ? product.LearnMoreButtonLink.Url : '#';
          ProductJson["ViewDemoButtonLink"] = product.ViewDemoButtonLink ? product.ViewDemoButtonLink.Url : '#';
          ProductArr.push(ProductJson);
        });
        this.setState({ aiProducts: ProductArr });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  // get ai insights details from AI Insights sharepoint list
  private getAIInsights = async () => {
    await sp.web.lists.getByTitle("AI Insights").items.select("ID,Title,Description,KeyFeatures,Category,Department,CaseStudyLink").top(4999).orderBy("Modified", false).top(3).get().then((data) => {
      let InsighttArr = [];
      if (data.length > 0) {
        data.map((insight) => {
          let InsightJson = {};
          InsightJson["ID"] = insight.ID;
          InsightJson["Title"] = insight.Title ? insight.Title : '';
          InsightJson["Description"] = insight.Description ? insight.Description : '';
          InsightJson["KeyFeatures"] = insight.KeyFeatures ? insight.KeyFeatures :'';
          InsightJson["Category"] = insight.Category ? insight.Category : '';
          InsightJson["Department"] = insight.Department ? insight.Department : '';
          InsightJson["CaseStudyLink"] = insight.CaseStudyLink ? insight.CaseStudyLink.Url : '#';
          InsighttArr.push(InsightJson);
        });
        this.setState({ aiInsights: InsighttArr });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}

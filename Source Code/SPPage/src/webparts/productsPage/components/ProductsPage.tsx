import * as React from 'react';
import styles from './ProductsPage.module.scss';
import { IProductsPageProps } from './IProductsPageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

require('../assets/style.css');
const backgroundColors = ["#e63946", "#2ecc71", "#9b59b6"];
export interface IProductsPageState {
  aiProducts:any;
}
export default class ProductsPage extends React.Component<IProductsPageProps, IProductsPageState> {
  constructor(props: IProductsPageProps, state: IProductsPageState) {
      super(props);
      this.state = {
        aiProducts:[],
      };
    }
  public render(): React.ReactElement<IProductsPageProps> {
    return (
            <section id='products' className="products-section">
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
                  );
                })
              }
              </div>
            </section>
    );
  }

  public componentDidMount = async () => {
    await this.getAIProducts();
  }

  // get ai products details from AI Products sharepoint list
    private getAIProducts = async () => {
      await sp.web.lists.getByTitle("AI Products").items.select("ID,Title,Description,KeyFeatures,Category,Department,LearnMoreButtonLink,ViewDemoButtonLink").top(4999).orderBy("Modified", false).get().then((data) => {
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
}

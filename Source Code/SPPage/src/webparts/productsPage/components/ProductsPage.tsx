import * as React from 'react';
import styles from './ProductsPage.module.scss';
import { IProductsPageProps } from './IProductsPageProps';
import { escape } from '@microsoft/sp-lodash-subset';

require('../assets/style.css');

export default class ProductsPage extends React.Component<IProductsPageProps, {}> {
  public render(): React.ReactElement<IProductsPageProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
              <section id='products' className="products-section">
            {/* <div className="badge">⚙️ Our Solutions</div> */}
            {/* <h2>AI Products - By PAL </h2> */}
            {/* <p className="subtitle">
              Innovative software solutions designed to solve complex business challenges and accelerate digital transformation for companies worldwide.
            </p> */}

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
          </section>
    );
  }
}

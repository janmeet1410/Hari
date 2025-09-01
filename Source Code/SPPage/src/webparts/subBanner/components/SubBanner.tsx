import * as React from 'react';
import styles from './SubBanner.module.scss';
import { ISubBannerProps } from './ISubBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';

require('../assets/style.css');

export default class SubBanner extends React.Component<ISubBannerProps, {}> {
  public render(): React.ReactElement<ISubBannerProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className="hero">
                <img className='herologo' style={{width:'270px', height:'auto'}} src={require('../assets/jnj.png')} />

         <div className='infoflex'>
           <div style={{display:'none'}} className="tagline">✨ Procurement AI Lab</div>
          <h1 style={{marginTop:'-40px'}}>{this.props.description}</h1>
          {/* <p>
           Procurement Digital Process & Solutions (DPS) - Global Services Procurement
          </p>
          <p>
            Say Hello to PAL - Your AI Partner for Procurement Excellence
          </p> */}
         </div>

                <img className='herologo' src={require('../assets/palwhite.png')} />

          {/* <div className="buttons">
      <a href="#" className="btn btn-primary">Discover Our Work →</a>
      <a href="#" className="btn btn-secondary">▶ Watch Demo</a>
    </div> */}
          {/* <div className="scroll-indicator"></div> */}
        </section>
    );
  }
}

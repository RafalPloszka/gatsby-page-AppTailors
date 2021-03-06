import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import Button from './Button';

import * as styles from './NavbarMobile.module.scss';

const NavbarMobile = ({ links }) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true); 
  const [expanded, setExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    setExpanded(false);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const onClose = () => setExpanded(false);

  const classes = classNames(
    styles.navbar,
    styles.fixedTop,
    !visible && styles.notVisible,
  );

  return (
    <nav id="index" className={classes}>
      <div className={styles.container}>
        <div className={styles.navItem}>
          <Link 
            to="TOP" 
            className={classNames(styles.link, styles.cursorPointer)}
            spy 
            smooth="easeInOutQuart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 51.544 58.692">
              <path id="Artboard_1" data-name="Artboard 1" d="M97.9,62.136a9.781,9.781,0,0,0-.731-1.974l-.477-.9c-.082-.149-.154-.3-.244-.447l-.261-.439-.26-.438c-.087-.145-.171-.293-.267-.433L95.1,56.65a32.064,32.064,0,0,0-2.5-3.2l-.335-.382c-.11-.128-.232-.244-.347-.366l-.7-.731c-.244-.244-.488-.469-.731-.7l-.366-.351-.38-.335-.762-.669-.779-.636c-.133-.1-.261-.215-.4-.316l-.411-.306c-.273-.2-.541-.406-.818-.6-.562-.375-1.113-.767-1.7-1.108l-.432-.266-.216-.132c-.073-.043-.147-.083-.222-.122l-.886-.488c-.146-.084-.3-.158-.449-.233l-.267-.133q-1.358-3.187-2.7-6.382L70.929,18.427l2.689-5.27A3.535,3.535,0,0,0,71.8,8.5h0a3.535,3.535,0,0,0-4.458,1.436L67.2,9.609l-.007-.015a1.036,1.036,0,0,0-1.9.837l.984,2.223L54.921,43.472a55.921,55.921,0,0,0-6.948,2.253,55.794,55.794,0,0,1,6.9-2.12l-8.3,22.521L58.437,42.9a47.027,47.027,0,0,1,5.145-.55l.5-.026c.166-.01.333-.009.5-.013l1-.02c.667.011,1.334,0,2,.045a37.751,37.751,0,0,1,3.976.373,34.426,34.426,0,0,1,7.691,2.05q.761.3,1.5.639.389.875.783,1.753l1.635,3.667.817,1.829c.277.61.536,1.219.795,1.829.517,1.228,1.022,2.473,1.585,3.708A31.879,31.879,0,0,0,88.257,61.8a14.618,14.618,0,0,0,2.589,3.261,7.523,7.523,0,0,0,1.787,1.2,6.1,6.1,0,0,0,2.1.62,3.863,3.863,0,0,0,1.151-.062,2.977,2.977,0,0,0,1.1-.466,2.531,2.531,0,0,0,.8-.94,3.382,3.382,0,0,0,.316-1.128,6.373,6.373,0,0,0-.2-2.148Zm-28.6-51a1.219,1.219,0,0,1,2.233.975l-1.666,3.82-1.307-3.094Zm-.61,6.984a1.219,1.219,0,0,1-1.78-1.512l.553-1.264ZM80.38,44.639l-.944-.366a34.749,34.749,0,0,0-7.822-1.95,37.946,37.946,0,0,0-4.023-.312C66.919,41.98,66.25,42,65.576,42l-1.006.035c-.168.007-.335.01-.5.022l-.5.034a47.315,47.315,0,0,0-5.03.61L69.8,20.634l8.477,19.179q1.074,2.427,2.144,4.852ZM97.135,64.18a2.438,2.438,0,0,1-.23.792,1.542,1.542,0,0,1-.5.561,2,2,0,0,1-.74.293,2.878,2.878,0,0,1-.846.029,5.055,5.055,0,0,1-1.72-.547,6.362,6.362,0,0,1-1.521-1.053,13.526,13.526,0,0,1-2.331-3.048,50.184,50.184,0,0,1-3.274-7.22c-.25-.622-.511-1.254-.774-1.865l-.781-1.847-1.585-3.7c-.024-.06-.05-.122-.076-.178a33.514,33.514,0,0,1,9.265,7.558,31.422,31.422,0,0,1,2.387,3.16l.533.835c.091.138.171.282.252.424l.244.429.244.429c.084.143.151.293.228.439l.449.88a8.868,8.868,0,0,1,.629,1.8A5.42,5.42,0,0,1,97.135,64.18Z" transform="translate(-46.58 -8.204)" fill="#0568ff"/>
            </svg>
          </Link>
        </div>
        <svg onClick={() => setExpanded(!expanded)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className={styles.icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
          <div className={classNames(styles.collapse, expanded && styles.expanded)}>
            <div className={classNames(styles.container, styles.collapseContent, expanded && styles.expanded)}>
              <div className={styles.navLinks}>
                {links.map(link => {
                  return (
                    <div className={styles.navItem} key={link.name}>
                      <Link 
                        to={link.to}
                        className={styles.link}
                        activeClass={styles.active}
                        spy
                        smooth="easeInOutQuart"
                        onClick={onClose}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )
                })}
              </div>
              <a href="mailto:hello@apptailors.com">
                <Button 
                  className={styles.button}
                  message="Estimate Project"
                  secondary
                />
              </a>
              
            </div>
          </div>
      </div>
    </nav>
  )
}

NavbarMobile.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}

export default NavbarMobile;

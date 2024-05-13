import React from 'react'
import { FiSearch } from "react-icons/fi";
import { LuHome } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";

export default function Header() {
  return (
    <>
        <div className='header'>
          <div className='container'>
            <div className='header__wrapper'>
              <div className='header__right'>
                <div className='header__logos'>
                  <p className='header__logo'>GeekSocial</p>
                </div>
                <div className='header__search-inputs'>
                  <input placeholder='سرچ...' type='text' className='header__search-input'/>
                  <FiSearch />
                </div>
                <ul className='header__btn-group'>
                  <li className='header__btn-home'>
                    <a className='header-btn-home-link'><LuHome></LuHome></a>
                  </li>
                  <li className='header__btn-drop-down'>
                  <a className='header-btn-drop-down-link'><FiUserPlus></FiUserPlus></a>
                  </li>
                </ul>
              </div>
              <div className='header__left'>
                  <div className='header__user-infos'>
                    <div className='header__user-info'>
                      <h4 className='header__user-name'>مانی فنایی</h4>
                      <p className='header__user-status'>فعال</p>
                    </div>
                    <ul className='header__left-btn-group'>
                      <li className='header__btn-notif'><a className='header__btn-'></a></li>
                      <li className=''><a className='header__btn-'></li>
                      <li className=''><a className='header__btn-'></li>
                    </ul>
                    <div className='header__user-image-container'>
                      <img src='' className='header__user-image'></img>
                      <span className='header__user-circle'></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

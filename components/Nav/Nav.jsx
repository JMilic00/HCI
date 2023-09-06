"use client"

import styles from './Nav.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import{ useState, useEffect } from 'react';
import{ signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
  const router = usePathname();
  const { data: session } = useSession();
  

  const [providers, setProviders] = useState(null)
  const [Dropdown, setDropdown] = useState(false);

  useEffect(() =>{
    const setUpProviders = async () =>{
      const response = await getProviders();

      setProviders(response);
    }

    setUpProviders()
    
  },[])

  return (
    <nav className={styles.flex_nav}>
      <Link href="/" className={styles.link}>
        <Image 
        src="/assets/images/K.jpg"
        alt="logo"
        width={50}
        height={50}
        className={`${styles.image}`}
        />
        <p className={`${styles.home} ${styles.hide_desktop}`}>K-agency</p>
      </Link>  
        <div className={styles.right_side}>
        {/* desktop */}
        <div className={`${styles.hide_desktop} ${styles.relative}`}>
          {session?.user ? (
            <div className={styles.right_side}>

                    <Link href="/AboutUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/AboutUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>About us</p>
                    </Link>

                    <Link href="/ContactUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/ContactUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>Contact Us</p>
                    </Link>

                    <Link href="/blogs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>blogs</p>
                    </Link>

                    <Link href="/create-blog"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/create-blog' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>Create Blog</p>
                    </Link>

              <button onClick={signOut} className={`${styles.button}`}>
                Sign Out
              </button>
              
              <Link href="/profile" className={`${styles.link}`}>
                <Image 
                  src={session?.user.image}
                  alt="logo"
                  width={50}
                  height={50}
                  className={styles.image}
                />
              </Link>
            </div>
          ):
          <div className={styles.right_side}>
            {providers &&
              Object.values(providers).map((provider) => (
              <div className={styles.right_side}>

                    <Link href="/AboutUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/AboutUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>About us</p>
                    </Link>

                    <Link href="/ContactUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/ContactUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>Contact Us</p>
                    </Link>

                    <Link href="/blogs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>blogs</p>
                    </Link>

                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className={styles.button}
                >
                  Sing In
                </button>

              </div> 
              )
              )
            }
          </div>
          }
        </div>
      </div>


      {/* mobile */}
      <div className={`${styles.hide_mobile} ${styles.relative}`}>
        {session?.user ?(
          <div className={styles.right_side}>
              <Image 
                src={session?.user.image}
                alt="logo"
                width={50}
                height={50}
                onClick={()=>setDropdown
                  (
                    prev => !prev
                  )}
                  className={`${styles.link}`}
                />

                {Dropdown && (
                  <div className={styles.Dropdown}>
                    <Link href="/AboutUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/AboutUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>About us</p>
                    </Link>

                    <Link href="/ContactUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/ContactUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>Contact Us</p>
                    </Link>

                    <Link href="/blogs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>blogs</p>
                    </Link>

                    <Link href="/create-blog"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/create-blog' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>Create Blog</p>
                    </Link>
                    
                    <button
                      className={styles.button}
                      type="button"
                      onClick={()=>{setDropdown(false)
                      signOut();
                    }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}  
          </div>
        ):
          <div className={styles.right_side}>
                <Image 
                src="/assets/images/menu.svg"
                alt="logo"
                width={30}
                height={30}
                onClick={()=>setDropdown
                  (
                    prev => !prev
                  )}
                  className={styles.link}
                />

                {Dropdown && providers && Object.values(providers).map((provider) => (
                  <div className={styles.Dropdown} >
                    <Link href="/AboutUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/AboutUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>About us</p>
                    </Link>

                    <Link href="/ContactUs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/ContactUs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>Contact Us</p>
                    </Link>

                    <Link href="/blogs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}
                    >
                     <p className={styles.text_nav}>blogs</p>
                    </Link>

                    <button
                      className={styles.button}
                      type="button"
                      key={provider.name}
                      onClick={()=>{setDropdown(false)
                      signIn(provider.id);
                    }}
                    >
                      Sign In
                    </button>
                  </div>
                ))}  
         {/*  {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
              >
                Sing In
              </button>
            )
            )
        } */}
      </div>
      }
      </div>
    </nav>
  )
}

export default Nav
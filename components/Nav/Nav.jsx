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
        src="/assets/images/K.svg.png"
        alt="logo"
        width={30}
        height={30}
        />
        <p className={styles.hide_desktop}>K-agency</p>
      </Link>  
        <div className={styles.right_side}>
        {/* desktop */}
        <div className={`${styles.hide_desktop}`}>
          {session?.user ? (
            <div className={styles.right_side}>
              <Link href="/blogs" className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}>
                <p>blogs</p>
              </Link>
              <Link href="/create-blog" className={`${styles.right_side_item} ${router === '/create-blog' ? styles.selected :''}`}>
                <p>Create blog</p>
              </Link>
              <Link href="/blogs" className={`${styles.right_side_item} ${router === '/about us' ? styles.selected :''}`}>
                <p>About us</p>
              </Link>

              <button color="success" onClick={signOut} className={styles.right_side_item}>
                Sign Out
              </button>
              <Link href="/profile" className={`${styles.link}`}>
                <Image 
                  src={session?.user.image}
                  alt="logo"
                  width={30}
                  height={30}
                  className={`${styles.image}`}
                />
              </Link>
            </div>
          ):
          <div className={styles.right_side}>
            {providers &&
              Object.values(providers).map((provider) => (
              <div className={styles.right_side}>
                <Link href="/blogs" className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}>
                  <p>About us</p>
                </Link>
                <Link href="/blogs" className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}>
                  <p>blogs</p>
                </Link>
                <button
                  variant="contained" 
                  color="success"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className={`${styles.right_side_item} ${router === '' ? styles.selected :''}`}
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
      <div className={`${styles.hide_mobile} ${styles.logo_text}`}>
        {session?.user ?(
          <div className={styles.right_side}>
              <Image 
                src={session?.user.image}
                alt="logo"
                width={30}
                height={30}
                onClick={()=>setDropdown
                  (
                    prev => !prev
                  )}
                  className={`${styles.link}`}
                />

                {Dropdown && (
                  <div className={styles.right_side}>
                    <Link href="/blogs"
                      onClick={()=>setDropdown(false)}
                      className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}
                    >
                    <p>About us</p>
                    </Link>

                    <Link
                    href="/profile"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/profile' ? styles.selected :''}`}
                    >
                      <p>My Profile</p>
                    </Link>
                    <Link
                    href="/create-blog"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/create-blog' ? styles.selected :''}`}
                    >
                      <p>Create Blog</p>
                    </Link>
                    <button
                      className={`${styles.right_side_item} ${router === '' ? styles.selected :''}`}
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
          <div>
           <Image 
                src="/assets/images/menu.png"
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
                  <div className={styles.right_side} >
                    <Link href="/blogs"
                    onClick={()=>setDropdown(false)}
                    className={`${styles.right_side_item} ${router === '/blogs' ? styles.selected :''}`}
                    >
                     <p>About us</p>
                    </Link>
                    <button
                      type="button"
                      key={provider.name}
                      onClick={()=>{setDropdown(false)
                      signIn(provider.id);
                    }}
                      className={`${styles.right_side_item} ${router === '' ? styles.selected :''}`}
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
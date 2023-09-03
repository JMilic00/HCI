"use client"

import styles from './Nav.module.css'
import Link from 'next/link';
import Image from 'next/image';

import{ useState, useEffect } from 'react';
import{ signIn, signOut, useSession, getProviders } from 'next-auth/react';

import Button from "@mui/material/Button"

const Nav = () => {
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
        src="/assets/images/Sample_User_Icon.png"
        alt="logo"
        width={30}
        height={30}
        />
        <p className={styles.hide_desktop}>K-agency</p>
      </Link>

        <div className={styles.right_side}>
        {/* desktop */}
        <div className={styles.hide_desktop}>
          {session?.user ? (
            <div className={styles.right_side}>
              <Link href="/create-blog">
                <p>Create blog</p>
              </Link>
              <Link href="/blogs">
                <p>About us</p>
              </Link>
              <Link href="/blogs">
                <p>blogs</p>
              </Link>

              <Button color="success"onClick={signOut} className="outline_btn">
                Sign Out
              </Button>
              <Link href="/profile">
                <Image 
                  src={session?.user.image}
                  alt="logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          ):
          <>
            {providers &&
              Object.values(providers).map((provider) => (
              <div className={styles.right_side}>
                <Link href="/blogs">
                  <p>About us</p>
                </Link>
                <Link href="/blogs">
                  <p>blogs</p>
                </Link>
                <Button
                variant="contained" 
                color="success"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sing In
                </Button>
              </div> 
              )
              )
            }
          </>
          }
        </div>
      </div>


      {/* mobile */}
      <div className={`${styles.hide_mobile} ${styles.logo_text}`}>
        {session?.user ?(
          <div>
              <Image 
                src={session?.user.image}
                alt="logo"
                width={30}
                height={30}
                onClick={()=>setDropdown
                  (
                    prev => !prev
                  )}
                />

                {Dropdown && (
                  <div>
                    <Link href="/blogs"
                      onClick={()=>setDropdown(false)}
                    >
                    <p>About us</p>
                    </Link>

                    <Link
                    href="/Profile"
                    onClick={()=>setDropdown(false)}
                    >
                      <p>My Profile</p>
                    </Link>
                    <Link
                    href="/create-blog"
                    onClick={()=>setDropdown(false)}
                    >
                      <p>Create Blog</p>
                    </Link>
                    <button
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
          <>
           <Image 
                src="/assets/images/menu.png"
                alt="logo"
                width={30}
                height={30}
                onClick={()=>setDropdown
                  (
                    prev => !prev
                  )}
                />

                {Dropdown && providers && Object.values(providers).map((provider) => (
                  <div>
                    <Link href="/blogs"
                    onClick={()=>setDropdown(false)}
                    >
                     <p>About us</p>
                    </Link>
                    <Link
                    href="/create-blog"
                    onClick={()=>setDropdown(false)}
                    >
                      <p>Create Blog</p>
                    </Link>
                    <button
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
      </>
      }
      </div>
    </nav>
  )
}

export default Nav
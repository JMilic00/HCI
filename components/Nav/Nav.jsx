"use client"

import styles from './Nav.module.css'
import Link from 'next/link';
import Image from 'next/image';

import{ useState, useEffect } from 'react';
import{ signIn, signOut, useSession, getProviders } from 'next-auth/react';

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
        src="/assets/images/FESB.jpg"
        alt="logo"
        width={30}
        height={30}
        />
        <p className={styles.hide_desktop}>K-agency</p>
      </Link>

      {/* desktop */}
      <div className={styles.hide_desktop}>
        {false ? (
          <div>
            <Link href="/create-prompt">
              Create blog
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image 
                src="/assets/images/Sample_User_Icon.png"
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
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
              >
                Sing In
              </button>
            )
            )
          }
        </>
        }
      </div>


      {/* mobile */}
      <div className={`${styles.hide_mobile} ${styles.logo_text}`}>
        {session?.user ?(
          <div>
              <Image 
                src="/assets/images/Sample_User_Icon.png"
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
                    <Link
                    href="/Profile"
                    onClick={()=>setDropdown(false)}
                    >
                      My profile
                    </Link>
                    <Link
                    href="/create-prompt"
                    onClick={()=>setDropdown(false)}
                    >
                      Create Prompt
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
          {providers &&
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
        }
      </>
      }
      </div>


    </nav>
  )
}

export default Nav
import Header from "../components/Header/Header";
import headerImage from "../assets/android.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/Products";

function Allandroid(props) {
  

  return (

    <>
      <Header title={"What is Android short information?"} image={headerImage}>
        <p>
              <strong>
                Who invented Android?
              </strong>
              <br />
              Google
              The Android operating system was first developed by Android, Inc., a software company located in Silicon Valley before Google acquired it in 2005. Investors and electronics industry analysts have questioned Google's true intentions for entering the mobile market space since that acquisition.
            </p>

            <div>
            
            <p>

              Android is a software package and linux based operating system for mobile devices such as tablet computers and smartphones. It is developed by Google and later the OHA (Open Handset Alliance). Java language is mainly used to write the android code even though other languages can be used.

            </p>
            <p>
              Android powers some of the world’s top cameras. So when the action speeds up or the lights go down low, you always get that perfect shot.</p>


            <p>
              <strong>
                Why android?
              </strong>
              <br />
              Apple and Google both have fantastic app stores. But Android is far superior at organizing apps, letting you put important stuff on the home screens and hide less useful apps in the app drawer. Also, Android's widgets are much more useful than Apple's.
            </p>

            <p>
              <strong>
                Which OS is used in Android?
              </strong>
              <br />
              <mark>
                Linux
              </mark>
              <br />
              Android is a Linux-based OS that uses Linux 2.6 to provide core services such as security, memory management, process management, network stack, and a driver model. It offers a wide range of libraries that enable the app developers to build different applications.
            </p>


            <p>
              <strong>
                Are androids easier to hack than iPhones?
              </strong>
              <br />
              <mark>
                Android makes it easier for hackers to develop exploits,
              </mark>
              increasing the threat level. Apple's closed development operating system makes it more challenging for hackers to gain access to develop exploits. Android is the complete opposite.

            </p>


            <p>
              <strong>
                Which system is safer iOS or Android?
              </strong>
              <br />
              security. While
              <mark>
                iOS may be considered more secure,
              </mark>

              it's not impossible for cybercriminals to hit iPhones or iPads with malicious software. Because of this, the owners of both Android and iOS devices need to be aware of possible malware and viruses, and be careful when downloading apps from third-party app stores.
            </p>

            <p>
              <strong>
                What is the best phone in the world?
              </strong>
              <br />

              <mark>
                The best phones you can buy today
              </mark>
              <br />

              <ol>
                <li>
                  iPhone 13 Pro Max. The best phone overall. ...
                </li>
                <li>
                  Samsung Galaxy S22 Ultra. Samsung's best phone. ...
                </li>
                <li>
                  iPhone 13. The best phone for the money. ...
                </li>
                <li>
                  Google Pixel 6. The best Android experience for a great price. ...
                </li>
                <li>
                  Google Pixel 5a. The best budget camera phone. ...
                </li>


                <li>
                  iPhone 13 Pro. ...
                </li>
                <li>
                  OnePlus 10 Pro. ...
                </li>
                <li>
                  Google Pixel 6 Pro.
                </li>
              </ol>

            </p>
          </div>
      </Header>

      <ProductList products={getProducts()}/>
    </>
  );
};


export default Allandroid;
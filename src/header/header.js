import { useEffect, useState } from "react";

const Header = () => {
    const [header,setHeader] = useState(true)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >120){
                setHeader(false)
            }else{
                setHeader(true)
            }
        })
    },[])
   
        return ( 
            <div className={header? "header bg-white position-fixed top-0 start-0" : "header-off"}>
                <div className="container-md p-0">
                    <div className="d-flex justify-content-between mx-auto py-2">
                        <img src="https://www.hidoctor.ir/wp-content/themes/hidoctor/assets/images/logo.png" className="img-fluid" alt=""/>
                        <div className="input-group w-auto">
                        <form className="d-flex border border-secondary rounded-5 p-2" role="search">
                            <input className="form-control border-0 p-0 input-search" type="search" placeholder="جستجو" aria-label="Search" />
                            <button className="btn btn-outline-success border-0 w-auto p-0 btn-search" type="submit"><i className="bi bi-search bg-info border rounded-4 p-2  text-white"></i></button>
                        </form>
                            
                        </div>
                    
    
    
    
                    </div>
    
                    <nav className="d-flex justify-content-lg-between justify-content-start flex-wrap gap-2 mt-2 pb-3">
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">تماس با ما</a>
                        <div href="" className="text-decoration-none fs-6" ><a className=" text-white text-decoration-none bg-primary border borrder-end-0 rounded-start px-1"> رژیم غذایی آنلاین</a><a className=" text-white text-decoration-none bg-danger border border-start-0 rounded-end">جدید</a></div>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">پروفایل پزشکان</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">کرونا</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">طب سنتی و گیاهان</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">زیبایی</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">جنسی</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">تغذیه</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">سلامت اعضای خانواده</a>
                        <a href="" className="text-decoration-none text-secondary fs-6 border rounded-4 px-2">بیماری ها</a>
    
                    </nav>
    
    
                </div>
            </div>
         );
  

}
 
export default Header;

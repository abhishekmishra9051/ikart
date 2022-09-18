import './index.scss'
export default function Footer() {
    return (
        <footer className='bg-dark text-light' >

            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-6'>
                       <p>&copy; Copyright {new Date().getFullYear()}, All Right Reserved. </p>
                    </div>
                  
                </div>
            </div>

        </footer>
    )
}
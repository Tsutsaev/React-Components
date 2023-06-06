import logoImg from '../../assets/Group.svg'
import LogoBg from './LogoBg.module.css'
const Logo = () => {
return (
    <div className={LogoBg.bg}>
        <img src={logoImg}></img>
    </div>
)
}
export default Logo
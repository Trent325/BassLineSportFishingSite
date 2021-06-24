import style from './ReportPost.module.scss';

interface Props{
    name?: string;
    url?: string;
    description?: string;
}

const ReportPost: React.FC<Props> = ({name, url, description}) =>{
    return(
        <div>
            <div className = {style.textBoxHeader}>
                {name}
            </div>
                <div className = {style.container}>
                    <div className = {style.ImgContainer} style={{backgroundImage: `url(${url})`}}></div>
                    <div className = {style.textBox}>
                        <div className = {style.textWrapper}>
                            {description}
                        </div>
                    </div>
                </div>
        </div>
    )

}
    
export default ReportPost;
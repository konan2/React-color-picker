import React, { useState, useEffect, useCallback, useRef } from 'react';

function DropDown(props) {
    const [isOpen, setOpen] = useState(false); 
    const arrowXpos = useRef()

    const cancel = () =>  {   // close and set previous value in onClose func
        setOpen(false)
        if(props.onClose){
            props.onClose()   
        }
    }


    const apply = ()=>{
        setOpen(false)
        props.onApply()
    }


    const toggle = useCallback((event) => {  
        arrowXpos.current = event.target.offsetLeft + (event.target.offsetWidth / 2)
        setOpen(!isOpen)
    }, [isOpen])


    useEffect(() => {
        if(!isOpen){
            return
        }
        window.addEventListener('click', cancel)
        return () => {
            window.removeEventListener('click', cancel)
        }
      }, [toggle])


      

    return (
        <React.Fragment>
            <button className="icon-button" onClick={toggle}>
                {props.children}
            </button>
           
            {isOpen &&
                <div className={'drop-down-container'}>
                    <div className="drop-down-content-arrow" style={{left: arrowXpos.current}}></div>
                    <div className={'drop-down-content'} onClick={props.controls ? (e) => e.stopPropagation() : undefined }>

                        {props.content}

                        {props.controls &&
                            <div className="drop-down-controls">
                                <button className={'btn'} onClick={cancel}>CANCEL</button>
                                <button className={'btn primary-btn'} onClick={apply}>OK</button>
                            </div>   
                        }
                    </div>
                </div>
            }
        </React.Fragment> 
    )
}

export default DropDown
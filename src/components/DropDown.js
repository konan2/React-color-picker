import React, { useState, useEffect, useCallback, useRef } from 'react';

function DropDown(props) {
    const [isListOpen, setListOpen] = useState(false); 
    const arrowXpos = useRef()

    const close = useCallback(() => {
        setListOpen(false)
        if(props.onClose){
            props.onClose()
        }
    }, [props])

    const toggle = useCallback((event) => {
        arrowXpos.current = event.target.offsetLeft + (event.target.offsetWidth / 2)
        setListOpen(!isListOpen)
    }, [isListOpen])

    useEffect(() => {
        if(!isListOpen){
            return
        }
        window.addEventListener('click', close)
        return () => {
            window.removeEventListener('click', close)
        }
      }, [toggle, close, isListOpen])


      

    return (
        <React.Fragment>
            <button className="icon-button" onClick={toggle}>
                {props.children}
            </button>
           
            {isListOpen &&
                <div className={'drop-down-container'}>
                    <div className="drop-down-content-arrow" style={{left: arrowXpos.current}}></div>
                    <div className={'drop-down-content'} onClick={props.controls ? (e) => e.stopPropagation() : undefined }>

                        {props.content}

                        {props.controls &&
                            <div className="drop-down-controls">
                                <button className={'btn'} onClick={close}>CANCEL</button>
                                <button className={'btn primary-btn'} onClick={toggle}>OK</button>
                            </div>   
                        }
                    </div>
                </div>
            }
        </React.Fragment> 
    )
}

export default DropDown
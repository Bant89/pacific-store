import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button"
import { Wrapper, ModalContainer, ModalContentContainer, StyledLink, CloseButton, ModalFormItem } from "styles/modalStyles"

function ForgotPassword({ onClose }) {
    return (
        <Wrapper>
            <ModalContainer>
                <CloseButton onClick={() => {
                    onClose()
                }}><AiOutlineCloseCircle color="#B26FF5" size="3rem" /></CloseButton>
                <ModalContentContainer>
                    <ModalFormItem>
                        <label>Entra tu correo para reiniciar tu contraseña</label>
                        <input type="text" placeholder="john@acme.com" />
                    </ModalFormItem>
                    <Button>Reiniciar contraseña</Button>
                    <Button theme="classic">Cancelar</Button>
                </ModalContentContainer>
            </ModalContainer>
        </Wrapper>
    )
}

export default function ModalPortal({ onClose }) {
    const ref = useRef(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.getElementById('modal-root')
        setMounted(true)
    })

    return mounted ? createPortal(<ForgotPassword onClose={onClose} />, ref.current) : null

}
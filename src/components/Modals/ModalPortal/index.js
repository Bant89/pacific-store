import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button"
import { Wrapper, Container, ContentContainer, StyledLink, CloseButton, FormItem } from "./styles"

function ForgotPassword({ onClose }) {
    return (
        <Wrapper>
            <Container>
                <CloseButton onClick={() => {
                    onClose()
                }}><AiOutlineCloseCircle color="#B26FF5" size="3rem" /></CloseButton>
                <ContentContainer>
                    <FormItem>
                        <label>Entra tu correo para reiniciar tu contraseña</label>
                        <input type="text" placeholder="john@acme.com" />
                    </FormItem>
                    <Button>Reiniciar contraseña</Button>
                    <Button theme="classic">Cancelar</Button>
                </ContentContainer>
            </Container>
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
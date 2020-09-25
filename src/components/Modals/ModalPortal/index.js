import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "components/Button"
import Field from "components/Field"
import { Container, ContentContainer, StyledLink, CloseButton, FormItem } from "styles/modalStyles"


export function LogIn({ children, onClose }) {
    return (
        <Container>
            <CloseButton onClick={() => {
                console.log('Hice click')
                onClose()
            }}><AiOutlineCloseCircle color="#B26FF5" size="3rem" /></CloseButton>
            <ContentContainer>
                <Button>Continua con Facebook</Button>
                <Button>Continua con Google</Button>
                <span>ó</span>
                <FormItem>
                    <label>Correo electrónico</label>
                    <input type="text" placeholder="john@acme.com" />
                </FormItem>
                <FormItem>
                    <label>Contraseña</label>
                    <input type="password" placeholder="******" />
                </FormItem>
                <Button>Iniciar sesión</Button>
                <StyledLink>¿Olvidaste tu contraseña?</StyledLink>
                <StyledLink>¿No tienes cuenta? Crea una</StyledLink>
            </ContentContainer>
        </Container>
    )
}

export default function ModalPortal({ children, onClose }) {
    const ref = useRef(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.getElementById('modal-root')
        setMounted(true)
    })

    return mounted ? createPortal(<LogIn onClose={onClose}>{children}</LogIn>, ref.current) : null

}
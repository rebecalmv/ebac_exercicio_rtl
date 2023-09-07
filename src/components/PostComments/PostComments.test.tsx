import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    });

    test('Deve adicionar "Comentario 1" na lista', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Comentario 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Comentario 1')).toBeInTheDocument()
    })

    test('Deve adicionar "Comentario 2" na lista', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Comentario 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Comentario 2')).toBeInTheDocument()
    })
});
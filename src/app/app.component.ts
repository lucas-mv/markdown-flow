import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'app';
  refreshGraphEvent: Subject<void> = new Subject<void>();
  inputText = `# Roteiro de teste app do twitter

Qualquer texto que não seja escrito como uma lista criada com o identificador + não será renderizado no diagrama.

## Subtópico

Este é um subtópico e funciona normalmente.

- listas com - não são renderizadas no diagrama
     - item de lista interno

+ Entrar no app do twitter
    + (Abrir tela home) Tela home aberta [✔]

        A tela home é uma tela top com os tweet tudo
        + (Botão novo tweet não exibido) Exibir mensagem de erro [⚠️]
        + Exibir tela de novo tweet (Clicar no botão novo tweet)
            + Descrição do fluxo da tela de novo tweet

            + Exibir mensagem de erro (Exibir qualquer outra tela)
    + (Exibir qualquer outra tela) [❌]  Exibir mensagem de erro

+ outro caso de teste
    + outro nó
`;

  ngOnInit() {
    const previousText = localStorage.getItem('markdown');
    if (previousText) {
      this.inputText = previousText;
    }
  }

  onInputTabKeydown(keydownEvent) {
    if (keydownEvent.keyCode === 9) {
      const markdownInput = <HTMLTextAreaElement>document.getElementById('markdown-input-id');
      const start = markdownInput.selectionStart;
      const end = markdownInput.selectionEnd;

      markdownInput.value = markdownInput.value.substring(0, start) + '     ' + markdownInput.value.substring(end);
      markdownInput.selectionStart = start + 5;
      markdownInput.selectionEnd = markdownInput.selectionStart;

      this.inputText = markdownInput.value;

      return false;
    }
  }

  inputTextChanged() {
    this.refreshGraphEvent.next();
    localStorage.setItem('markdown', this.inputText);
  }
}

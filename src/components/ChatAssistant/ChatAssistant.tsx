"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ChatAssistant.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '', // Start empty for the typewriter effect
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically open the chat window 1.5 seconds after page load for a dynamic feel
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Typewriter effect for the greeting
    if (isOpen) {
      const greeting = t('chat.greeting');
      
      // Reset the first message when language changes (if user hasn't chatted yet)
      setMessages(prev => {
         if (prev.length === 1) {
             return [{ id: '1', role: 'assistant', content: '' }];
         }
         return prev;
      });
      
      const interval = setInterval(() => {
        setMessages(prev => {
          if (prev.length > 1) {
             clearInterval(interval);
             return prev;
          }
          const firstMsg = prev[0];
          if (!firstMsg || firstMsg.content.length >= greeting.length) {
            clearInterval(interval);
            return prev;
          }
          const nextContent = greeting.slice(0, firstMsg.content.length + 1);
          return [{ ...firstMsg, content: nextContent }];
        });
      }, 30); 
      
      return () => clearInterval(interval);
    }
  }, [isOpen, language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { id: Date.now().toString(), role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, language }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errMsg = 'Network response was not ok';
        try {
          const parsed = JSON.parse(errorText);
          errMsg = parsed.error || errMsg;
        } catch (e) {
          errMsg = errorText;
        }
        throw new Error(errMsg);
      }
      
      const assistantMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: assistantMessageId, role: 'assistant', content: '' }]);
      setIsLoading(false); // Hide the spinner as soon as we start receiving text
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          
          // Smoothly type out the chunk character by character
          for (let i = 0; i < chunk.length; i++) {
            setMessages(prev => prev.map(msg => 
              msg.id === assistantMessageId 
                ? { ...msg, content: msg.content + chunk[i] } 
                : msg
            ));
            // 15ms delay per character for a smooth typewriter effect
            await new Promise(resolve => setTimeout(resolve, 15));
          }
        }
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: `Error: ${error.message || 'I am having trouble connecting right now.'}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {/* Floating Button */}
      <button 
        className={`${styles.floatingButton} ${isOpen ? styles.hidden : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <Bot size={20} className={styles.headerIcon} />
            <div>
              <h3 className={styles.headerTitle}>Sakthi Speaks AI</h3>
              <span className={styles.headerSubtitle}>Online • Replies instantly</span>
            </div>
          </div>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.messagesContainer}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.userWrapper : styles.assistantWrapper}`}>
              {msg.role === 'assistant' && (
                <div className={styles.avatar}>
                  <Bot size={16} />
                </div>
              )}
              <div className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.messageWrapper} ${styles.assistantWrapper}`}>
              <div className={styles.avatar}>
                <Bot size={16} />
              </div>
              <div className={`${styles.message} ${styles.assistantMessage} ${styles.loadingMessage}`}>
                <Loader2 size={16} className={styles.spinner} />
                <span>{t('chat.thinking')}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat.placeholder')}
            className={styles.input}
          />
          <button 
            type="submit" 
            className={styles.sendButton}
            disabled={!input.trim() || isLoading}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export type LegalContentType = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  content: string;
}

export function LegalModal({ isOpen, onOpenChange, title, content }: LegalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
          <ScrollArea className="h-full pr-6">
            <div 
              className="prose prose-sm dark:prose-invert whitespace-pre-wrap" 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

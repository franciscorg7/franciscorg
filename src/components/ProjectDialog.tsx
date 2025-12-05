import * as Dialog from '@radix-ui/react-dialog'
import type { ProjectDialogProps } from '../types/projects'

export const ProjectDialog = ({ project, children }: ProjectDialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30" />
      <Dialog.Content
        className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                   bg-white p-8 rounded-xl shadow-2xl z-40 
                   w-[90vw] max-w-2xl"
      >
        <Dialog.Title className="text-2xl font-bold text-primary-800 mb-4">
          {project.title}
        </Dialog.Title>
        <Dialog.Description>{project.description}</Dialog.Description>
        <Dialog.Close asChild>
          <button
            className="absolute top-4 right-4 text-gray-500 p-1 rounded-full"
            aria-label="Close"
          >
            <span className="text-xl">&times;</span>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

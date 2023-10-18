/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * @category Instructions
 * @category InitializeProof
 * @category generated
 */
export type InitializeProofInstructionArgs = {
  poolBump: number
  merkleRoot: number[] /* size: 32 */
  commitment: web3.PublicKey
}
/**
 * @category Instructions
 * @category InitializeProof
 * @category generated
 */
const initializeProofStruct = new beet.BeetArgsStruct<
  InitializeProofInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['poolBump', beet.u8],
    ['merkleRoot', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['commitment', beetSolana.publicKey],
  ],
  'InitializeProofInstructionArgs'
)
/**
 * Accounts required by the _initializeProof_ instruction
 * @category Instructions
 * @category InitializeProof
 * @category generated
 */
export type InitializeProofInstructionAccounts = {
  pool: web3.PublicKey
  proof: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
}

const initializeProofInstructionDiscriminator = [
  165, 188, 188, 88, 25, 248, 86, 93,
]

/**
 * Creates a _InitializeProof_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeProof
 * @category generated
 */
export function createInitializeProofInstruction(
  accounts: InitializeProofInstructionAccounts,
  args: InitializeProofInstructionArgs
) {
  const { pool, proof, authority, payer } = accounts

  const [data] = initializeProofStruct.serialize({
    instructionDiscriminator: initializeProofInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: pool,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: proof,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'spLit2eb13Tz93if6aJM136nUWki5PVUsoEjcUjwpwW'
    ),
    keys,
    data,
  })
  return ix
}
